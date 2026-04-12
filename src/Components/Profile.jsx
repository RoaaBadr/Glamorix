import { useContext, useState } from "react";
import { UsersContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { FiEdit, FiMapPin, FiHeart, FiShoppingBag, FiCreditCard } from "react-icons/fi";

const Profile = () => {
    const { currentUser } = useContext(UsersContext);
    const [activeTab, setActiveTab] = useState("profile");

    if (!currentUser) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Please log in to view your profile</h2>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: "profile", label: "Profile", icon: "👤" },
        { id: "address", label: "Address", icon: "📍" },
        { id: "wishlist", label: "Wishlist", icon: "❤️" },
        { id: "orders", label: "Orders", icon: "📦" },
    ];

    return (
        <div className="min-h-screen bg-base-200 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Profile Header */}
                <div className="card bg-base-100 shadow-xl mb-8">
                    <div className="card-body">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Avatar */}
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={currentUser.image || "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"}
                                        alt={currentUser.name}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* User Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-3xl font-bold text-base-content">{currentUser.name}</h1>
                                <p className="text-base-content/70 mt-1">{currentUser.email}</p>
                                <p className="text-sm text-base-content/60 mt-1">Customer ID: {currentUser.id}</p>
                                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                                    <div className="badge badge-primary">{currentUser.role}</div>
                                    <div className="badge badge-secondary">Member since 2024</div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="stats stats-vertical md:stats-horizontal shadow">
                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <FiHeart className="inline-block w-6 h-6" />
                                    </div>
                                    <div className="stat-title">Wishlist</div>
                                    <div className="stat-value text-primary">{currentUser.wishlist?.length || 0}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <FiShoppingBag className="inline-block w-6 h-6" />
                                    </div>
                                    <div className="stat-title">Orders</div>
                                    <div className="stat-value text-secondary">12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="tabs tabs-boxed justify-center mb-8">
                    {tabs.map((tab) => (
                        <a
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.label}
                        </a>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        {activeTab === "profile" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold card-title">Personal Information</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Full Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={currentUser.name}
                                            className="input input-bordered"
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={currentUser.email}
                                            className="input input-bordered"
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Phone</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={currentUser.phone}
                                            className="input input-bordered"
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Role</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={currentUser.role}
                                            className="input input-bordered"
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <h3 className="text-xl font-bold">PayPal Account</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">PayPal Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={currentUser.paypalAccount?.account || ""}
                                            className="input input-bordered"
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Account Type</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={currentUser.paypalAccount?.type || ""}
                                            className="input input-bordered"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "address" && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold card-title">Address Information</h2>
                                    <button className="btn btn-outline btn-primary">
                                        <FiEdit className="w-4 h-4 mr-2" />
                                        Edit Address
                                    </button>
                                </div>

                                {currentUser.address && currentUser.address.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {currentUser.address.map((addr, index) => (
                                            <div key={index} className="card bg-base-200">
                                                <div className="card-body">
                                                    <div className="flex items-start gap-3">
                                                        <FiMapPin className="w-5 h-5 text-primary mt-1" />
                                                        <div>
                                                            <h3 className="font-semibold">Address {index + 1}</h3>
                                                            <p className="text-sm text-base-content/70">
                                                                {addr.street}<br />
                                                                {addr.city}, {addr.zip}<br />
                                                                {addr.country}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <FiMapPin className="w-12 h-12 text-base-content/30 mx-auto mb-4" />
                                        <p className="text-base-content/60">No address information available</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "wishlist" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold card-title">My Wishlist</h2>

                                {currentUser.wishlist && currentUser.wishlist.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {currentUser.wishlist.map((productId) => (
                                            <div key={productId} className="card bg-base-200 hover:shadow-md transition-shadow">
                                                <div className="card-body">
                                                    <div className="flex items-center gap-3">
                                                        <FiHeart className="w-5 h-5 text-red-500" />
                                                        <div>
                                                            <h3 className="font-semibold">Product {productId}</h3>
                                                            <p className="text-sm text-base-content/70">In your wishlist</p>
                                                        </div>
                                                    </div>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-primary btn-sm">View Product</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <FiHeart className="w-12 h-12 text-base-content/30 mx-auto mb-4" />
                                        <p className="text-base-content/60">Your wishlist is empty</p>
                                        <Link to="/products" className="btn btn-primary mt-4">Browse Products</Link>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "orders" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold card-title">Order History</h2>

                                <div className="text-center py-8">
                                    <FiShoppingBag className="w-12 h-12 text-base-content/30 mx-auto mb-4" />
                                    <p className="text-base-content/60">Order history feature coming soon</p>
                                    <p className="text-sm text-base-content/50 mt-2">Track your purchases and order status</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
